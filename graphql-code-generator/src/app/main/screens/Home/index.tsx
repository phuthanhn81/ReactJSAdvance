import { Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";

import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import {
  DboProductInsertInput,
  DboProductSetInput,
  useGetListProductLazyQuery,
  useGetListProductQuery,
  GetListProductQuery,
  useInsertProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} from "../../../../sdk/sdk";

import { columns } from "./schema";

import TableList from "../../../common/components/TableList";
import { useAuth } from "../../../../contexts/AuthProvider";

gql`
  query GetProduct($id: Int!) {
    dbo_Product(where: { ID: { _eq: $id } }) {
      ID
      Name
      Price
    }
  }

  query GetListProduct {
    dbo_Product {
      ID
      Name
      Price
    }
  }

  mutation InsertProduct($data: dbo_Product_insert_input!) {
    insert_dbo_Product(objects: [$data]) {
      returning {
        ID
      }
    }
  }

  mutation UpdateProduct($id: Int!, $data: dbo_Product_set_input = {}) {
    update_dbo_Product(where: {ID: {_eq: $id}}, _set: $data) {
      returning {
        ID
      }
    }
  }

  mutation DeleteProduct($ids: [Int!]!) {
    delete_dbo_Product(where: { ID: { _in: $ids } }) {
      returning {
        ID
      }
    }
  }
`;

export default function Home() {
  const { useSdkLazyQuery, useSdkMutation } = useAuth();

  const { data } = useGetListProductQuery();
  // C1
  // const [getListProduct, { loading, data: products }] = useSdkLazyQuery(
  //   useGetListProductLazyQuery,
  //   { fetchPolicy: "no-cache" }
  // );

  const [insertProductMutation] = useSdkMutation(useInsertProductMutation);
  const [updateProductMutation] = useSdkMutation(useUpdateProductMutation);
  const [deleteProductMutation] = useSdkMutation(useDeleteProductMutation);

  const [showCreateProductModal, setShowCreateProductModal] =
    useState<boolean>(false);
  const [showUpdateProductModal, setShowUpdateProductModal] =
    useState<boolean>(false);
  const [createForm] = useForm();
  const [updateForm] = useForm();
  const [selectedRow, setSelectedRow] = useState<number[]>([]);

  //#region create
  const InsertProduct = () => {
    let data: DboProductInsertInput = {
      ID: createForm.getFieldValue("id"),
      Name: createForm.getFieldValue("name"),
      Price: createForm.getFieldValue("price"),
    };

    insertProductMutation({
      variables: {
        data,
      },
      // name from gql
      refetchQueries: ["GetListProduct"],
      onCompleted(response) {
        // getListProduct(); -> no effect
        console.log(response?.insert_dbo_Product?.returning[0].ID);
      },
      onError(error) {
        console.log(error);
      },
    })
      .then((response) => {
        // C1
        // getListProduct();
        // console.log(response.data?.insert_dbo_Product?.returning[0].ID);
      })
      .catch((error) => {
        // C1
        // console.log(error);
      });
  };

  const createProductModal = () => (
    <Modal
      title="Tạo sản phẩm"
      visible={showCreateProductModal}
      onCancel={() => setShowCreateProductModal(false)}
      onOk={() => InsertProduct()}
    >
      <Form form={createForm}>
        <Form.Item name="id" label="ID" labelCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Tên sản phẩm" labelCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Giá" labelCol={{ span: 24 }}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
  //#endregion

  //#region update
  const UpdateProduct = () => {
    let id = updateForm.getFieldValue("id");
    let data: DboProductSetInput = {
      ID: id,
      Name: updateForm.getFieldValue("name"),
      Price: updateForm.getFieldValue("price"),
    };

    updateProductMutation({
      variables: {
        id,
        data
      },
      refetchQueries: ["GetListProduct"],
      onCompleted(response) {
        setShowUpdateProductModal(false);
        console.log(response?.update_dbo_Product?.returning[0].ID);
      },
      onError(error) {
        console.log(error);
      },
    })
  }

  const handleShowUpdateProductModal = (record: GetListProductQuery["dbo_Product"][number]) => {
    updateForm.setFieldsValue({
      id: record.ID,
      name: record.Name,
      price: record.Price
    });
    setShowUpdateProductModal(true);
  }

  const updateProductModal = () => (
    <Modal
      title="Sửa sản phẩm"
      visible={showUpdateProductModal}
      onCancel={() => setShowUpdateProductModal(false)}
      onOk={() => UpdateProduct()}
    >
      <Form form={updateForm}>
        <Form.Item name="id" label="ID" labelCol={{ span: 24 }}>
          <Input readOnly={true} />
        </Form.Item>
        <Form.Item name="name" label="Tên sản phẩm" labelCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Giá" labelCol={{ span: 24 }}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
  //#endregion

  //#region delete
  const DeleteProduct = () => {
    if (selectedRow.length === 0) return;

    deleteProductMutation({
      variables: {
        ids: selectedRow,
      },
      refetchQueries: ["GetListProduct"],
      onCompleted(response) {
        let returning = response?.delete_dbo_Product?.returning;
        if (!returning) return;
        for (let i = 0; i < returning?.length; i++) {
          console.log(returning[i].ID);
        }
        setSelectedRow([]);
      },
    });
  };
  //#endregion

  useEffect(() => {
    // C1
    // getListProduct();
  }, []);

  return (
    <>
      <TableList
        title="Danh sách sản phẩm"
        data={data?.dbo_Product}
        columns={columns}
        rowKey={"ID" as keyof GetListProductQuery["dbo_Product"][number]}
        create={{
          title: "Sản phẩm",
          onCreate: () => setShowCreateProductModal(true),
        }}
        update={(record: GetListProductQuery["dbo_Product"][number]) => handleShowUpdateProductModal(record)}
        remove={{ title: "Sản phẩm", onDelete: () => DeleteProduct() }}
        select={{
          setSelectedRow: setSelectedRow,
        }}
      />
      {createProductModal()}
      {updateProductModal()}
    </>
  );
}

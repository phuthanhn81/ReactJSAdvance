import { Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";

import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import {
    DboProductInsertInput,
    GetListProductQuery,
    useDeleteProductMutation,
    useGetListProductLazyQuery,
    useGetListProductQuery,
    useInsertProductMutation,
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

  mutation DeleteProduct($id: Int!) {
    delete_dbo_Product(where: { ID: { _eq: $id } }) {
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
    const [deleteProductMutation] = useSdkMutation(useDeleteProductMutation);

    const [showCreateProductModal, setShowCreateProductModal] =
        useState<boolean>(false);
    const [form] = useForm();
    const [selectedRow, setSelectedRow] = useState<number[]>([]);

    const InsertProduct = () => {
        let data: DboProductInsertInput = {
            ID: form.getFieldValue("id"),
            Name: form.getFieldValue("name"),
            Price: form.getFieldValue("price"),
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

    const DeleteProduct = () => {
        console.log(selectedRow);
    }

    useEffect(() => {
        // C1
        // getListProduct();
    }, []);

    const createProductModal = () => (
        <Modal
            title="Tạo sản phẩm"
            visible={showCreateProductModal}
            onCancel={() => setShowCreateProductModal(false)}
            onOk={() => InsertProduct()}
        >
            <Form form={form}>
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
                remove={{ title: "Sản phẩm", onDelete: () => DeleteProduct() }}
                select={{
                    selectedRow: selectedRow,
                    setSelectedRow: () => setSelectedRow([]),
                }}
            />
            {createProductModal()}
        </>
    );
}

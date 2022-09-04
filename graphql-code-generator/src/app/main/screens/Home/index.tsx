import { Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";

import { useState } from "react";
import { gql } from "@apollo/client";
import { GetListProductQuery, useGetListProductQuery } from "../../../../sdk/sdk";

import { columns } from "./schema";

import TableList from "../../../common/components/TableList";

gql`
    query GetProduct($id: Int!) {
        dbo_Product(where: {ID: {_eq: $id}}) {
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
`;

export default function Home() {
    const { data } = useGetListProductQuery();

    const [showCreateProductModal, setShowCreateProductModal] = useState<boolean>(false);
    const [form] = useForm();

    const createProductModal = () => (
        <Modal
            title="Tạo sản phẩm"
            visible={showCreateProductModal}
            onCancel={() => setShowCreateProductModal(false)}
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
                create={{ title: "Sản phẩm", onCreate: () => setShowCreateProductModal(true) }}
            />
            {createProductModal()}
        </>
    )
}

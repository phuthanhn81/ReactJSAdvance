import { TableColumnsType } from "antd";
import { GetListProductQuery } from "../../../../sdk/sdk";

export const columns: TableColumnsType<GetListProductQuery["dbo_Product"][number]> = [
    {
        title: "Tên sản phẩm",
        dataIndex: "Name",
        key: "name",
        // render: (paperType) => (paperType === PaperType.DischargeNote ? "Giấy ra viện" : "Bảng kê"), ???
    },
    {
        title: "Giá",
        dataIndex: "Price",
        key: "price",
    },
];
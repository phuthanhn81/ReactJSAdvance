import { Space, Table, TableColumnsType, TableProps, Tooltip } from 'antd';
import ButtonColor from "antd-button-color";
import { PlusOutlined } from "@ant-design/icons";

import { GetRowKey } from 'antd/lib/table/interface';

import 'antd/dist/antd.css';
import styles from "./TableList.module.css";

interface ITableListProps<RecordType extends object = any> extends Omit<TableProps<RecordType>, "title" | "schema"> {
    title?: string;
    data?: TableProps<RecordType>["dataSource"];
    columns?: TableColumnsType<RecordType>;
    rowKey?: string | GetRowKey<RecordType>;

    create?: {
        title?: string;
        onCreate: () => void;
    };
}

export default function TableList<RecordType extends object = any>(props: ITableListProps<RecordType>) {
    const { title, data, columns, rowKey, create } = props;

    let onCreateTitle = create?.title ?? undefined;
    let onCreate = create?.onCreate ?? undefined;

    const renderTitle = () => (
        <Space className={[styles.tableListTitleContainer].join("")}>
            <span>{title}</span>
            <Space>
                {onCreate && (
                    <Tooltip title={`Thêm mới ${onCreateTitle}`}>
                        <ButtonColor icon={<PlusOutlined />} size={"middle"} type={"success"} onClick={onCreate}>
                            {onCreateTitle || ""}
                        </ButtonColor>
                    </Tooltip>
                )}
            </Space>
        </Space>
    );

    return (
        <Table<RecordType>
            title={title ? renderTitle : undefined}
            rowKey={rowKey || "ID"}
            dataSource={data}
            columns={columns}
        />
    )
}

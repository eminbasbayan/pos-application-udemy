import { Form, Modal, Table } from "antd";
import React from "react";

const Edit = ({ isEditModalOpen, setIsEditModalOpen }) => {
  return (
    <Modal
      open={isEditModalOpen}
      title="Kategori İşlemleri"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form>
        <Table bordered />
      </Form>
    </Modal>
  );
};

export default Edit;

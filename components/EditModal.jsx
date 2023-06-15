"use client";
import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

export default function EditModal() {
  const [openModal, setOpenModal] = useState();
  const [newDate, setNewDate] = useState();

  const props = { openModal, setOpenModal };
  return (
    <>
      <Button
        className="bg-red-500"
        onClick={() => props.setOpenModal("form-elements")}
      >
        Edit
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit date
            </h3>
            <div className="mb-2 block">
              <div>
                <Label htmlFor="date" value="New Date" />
              </div>
              <TextInput id="date" type="date" required />
            </div>

            <div className="w-full mt-5">
              <Button className="bg-green-500">Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

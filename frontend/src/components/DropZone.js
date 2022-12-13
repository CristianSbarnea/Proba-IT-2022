import React from 'react'
import { useDropzone } from 'react-dropzone'
import './styles/DropZone.css'

export default function DropZone({open}) {
    const { getRootProps, getInputProps } = useDropzone({});
    return (
        <div {...getRootProps({ className: "dropzone" })}>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center input-form-style">
            <p className="dropzone-content">
                Drag'n'drop some files here, or click to select files
            </p>
            </div>
        </div>
  );
}
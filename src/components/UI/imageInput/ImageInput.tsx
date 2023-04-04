import React from 'react';
import classes from './ImageInput.module.css';
import { UseFormRegister } from 'react-hook-form';
import ValidationInputs from '../../../utils/Validation';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  imageInputRef: UseFormRegister<CardFormData>;
  getImage: (file: FileList) => void;
}

const ImageInput = (props: IProps) => {
  return (
    <div className={classes.imageInput__wrapper}>
      <div>
        <label>
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...props.imageInputRef('inputImage', {
              validate: (data) => {
                const validate = ValidationInputs.validateImageInput(data as unknown as FileList);
                return validate ? validate : true;
              },
            })}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageInput;

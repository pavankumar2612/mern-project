import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosinstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    //APPEND image file to form data

    formData.append('image',imageFile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE,formData, {
            headers : {
                'Content-Type':'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading the image:', error);
        throw error;
    }
};

export default uploadImage;
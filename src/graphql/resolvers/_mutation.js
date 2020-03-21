import { login, register } from '@source/Auth';
import {
    createCategory, updateCategory, deleteCategory, restoreCategory,
} from '@source/Category';

import {
    createProduct, updateProduct, deleteProduct, restoreProduct,
} from '@source/Product';


export default {
    register,
    login,
    createCategory,
    updateCategory,
    deleteCategory,
    restoreCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    restoreProduct,
};

import { login, register } from '@source/Auth';
import {
    createCategory, updateCategory, deleteCategory, restoreCategory,
} from '@source/Category';

import {
    createProduct, updateProduct, deleteProduct, restoreProduct,
} from '@source/Product';

import {
    createAuction, updateAuction,
} from '@source/Auction';

import { createAuctionHistory } from '@source/AuctionHistory';

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
    createAuction,
    updateAuction,
    createAuctionHistory,
};

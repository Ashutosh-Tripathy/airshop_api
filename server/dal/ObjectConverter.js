const userDetail = ['id', 'name', 'mobile', 'type', 'state_id', 'district_id', 'area', 'address', `created_at`, `updated_at`, `deleted_at`];
const postUserDetail = ['id', 'name', 'mobile', 'type', 'state_id', 'district_id', 'area', 'address'];
const orderDetail = ['id', 'buyer_id', 'seller_id', 'status', 'note', `created_at`, `updated_at`, `deleted_at`];
const postOrderDetail = ['id', 'buyer_id', 'seller_id', 'status', 'note'];
const patchOrderDetail = ['status'];

const objectMap = {
    'userDetail': {
        default: userDetail,
        post: postUserDetail
    },
    'orderDetail': {
        default: orderDetail,
        post: postOrderDetail,
        patch: patchOrderDetail
    }
};

const convertObject = (data, objectType, requestType = 'get') => {
    const result = {};
    // let allowedKeys = Object.keys(data);
    let allowedKeys = (objectMap[objectType][requestType] || objectMap[objectType].default);
    // if (requestType != 'get') {
    //     allowedKeys = allowedKeys.filter(key => !key.endsWith('_at'));
    // }
    // console.log(allowedKeys);
    // console.log(data);
    const filtered = Object.keys(data)
        .filter(key => allowedKeys.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    console.log(filtered);
    return filtered;
};

export default convertObject;
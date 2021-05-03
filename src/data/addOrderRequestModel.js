class AddOrderRequestModel {
    constructor(        
        orderId,
        branchId,
        branchName,
        orderDate,
        shippingDate,
        status,
        totalPrice,
        rawproductsinorder){
            this.orderId = orderId,
            this.branchId = branchId,
            this.branchName = branchName,
            this.orderDate = orderDate,
            this.shippingDate = shippingDate,
            this.status = status,
            this.totalPrice = totalPrice,
            this.rawproductsinorder = rawproductsinorder
        }
}

class Rawproductsinorder {
    constructor(
        orderId,
        contactName,
        rawproductId,
        rawProductName,
        rawProductPicture,
        orderAmount,
        weightName,
        orderPrice
    ){
        this.orderId = orderId,
        this.contactName = contactName,
        this.rawproductId = rawproductId,
        this.rawProductName = rawProductName,
        this.rawProductPicture = rawProductPicture,
        this.orderAmount = orderAmount,
        this.weightName = weightName,
        this.orderPrice = orderPrice
    }

}


export {AddOrderRequestModel, Rawproductsinorder}
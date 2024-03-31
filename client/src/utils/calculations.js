export const totalSum = (products) => {
    if(products) {
        let total = 0;
        for(const product of products) {
            const {price,quantity} = product;
            total += (price * quantity);
        }
        return total;
    }
}

export const totalProfit = (products) => {
    if(products) {
        let total = 0;
        let totalCost = 0;
        for(const product of products) {
            const {price,costs,quantity} = product;
            total += (price * quantity);
            totalCost += (costs * quantity); 
        }
        return total - totalCost;
    }
}

export const totalQuantity = (products) => {
    if(products) {
        let total = 0;
        for(const product of products) {
            const {quantity} = product;
            total += quantity;
        }
        return total;
    }
    
}

export const profitMargin = (products) => {
    if(products) {
        const _totalProfit = totalProfit(products);
        const _totalSum = totalQuantity(products);
        const _profitMargin = Math.round((_totalProfit/_totalSum)*100);
        return _profitMargin;
    }
}
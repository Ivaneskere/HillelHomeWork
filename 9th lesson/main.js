'use strict';

function first(orders) {
    return orders.reduce((map, { user }) => {
        map.set(user, map.has(user) ? map.get(user) + 1 : 1);
        return map;
    }, new Map());
}
// const userMap = first(orders);
// console.log(userMap);

function firstSecond(orders) {
    return orders.reduce((acc, users) => {
        if(!acc[users.user]) {
            acc[users.user] = 1
        } else {
            acc[users.user]++;
        }
        return acc
    },{})
}
// const result = firstSecond(orders)
// console.log(result)

function second(orders) {
    return orders.reduce((acc, order) => {
        const tottal = order.items.reduce((sum, item) => sum + item.price, 0)

        if (!acc.has(order.user)) {
            acc.set(order.user, 0)
        }
        acc.set(order.user, acc.get(order.user) + tottal);

        return acc
    }, new Map())
}
// const result = second(orders)
// console.log(result);

function secondSecond(orders) {
    return orders.reduce((acc, order) => {
        const total = order.items.reduce((sum, item) => sum + item.price, 0)

        if (!acc[order.user]) {
            acc[order.user] = 0
        }
        acc[order.user] += total

        return acc
    }, {})
}

// const result = secondSecond(orders)
// console.log(result1);

function third(orders) {
    return orders.reduce((acc, tovar) => {
        tovar.items.forEach(element => acc.add(element.name))
        return acc
    }, new Set())


}

// const result = third(orders)
// console.log(result);

function fourth(orders) {
    function findTopUser(orders) {
        const userTotals = orders.reduce((acc, order) => {
            const total = order.items.reduce((sum, item) => sum + item.price, 0);
            acc.set(order.user, (acc.get(order.user) || 0) + total);
            return acc;
        }, new Map());

        let topUser = null;
        let maxTotal = 0;
        for (const [user, total] of userTotals) {
            if (total > maxTotal) {
                maxTotal = total;
                topUser = user;
            }
        }

        return { user: topUser, total: maxTotal };
    }

    return findTopUser(orders);
}

// const result = fourth(orders);
// console.log(result);


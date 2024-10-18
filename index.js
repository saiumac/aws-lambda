let menuItems = [];

exports.handler = async (event) => {
    const { httpMethod, body } = event;

    if (httpMethod === "POST") {
        // Add a new menu item
        const newItem = JSON.parse(body);
        menuItems.push(newItem);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Menu item added successfully",
                menuItems,
            }),
        };
    }

    if (httpMethod === "GET") {
        // Get the list of menu items
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Available menu items",
                menuItems,
            }),
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({
            message: "Method not allowed",
        }),
    };
};

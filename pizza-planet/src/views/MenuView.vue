<template>
    <div class="menu_wrapper">
        <div class="menu">
            <h3>~ Authentic handmade pizza ~</h3>
            <table>
                <tbody>
                    <tr>
                        <td><strong>~ Margherita ~</strong></td>
                    </tr>
                    <tr>
                        <td><small>A delicious tomato pizza with mozarella</small></td>
                    </tr>
                    <tr>
                        <td>9"</td>
                        <td>7,98€</td>
                        <td><button type="button">&#43;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div>
                <table>
                    <tr>
                        <td>
                            <button type="button" class="quantity_button">&#8722;</button>
                            <span>4</span>
                            <button type="button" class="quantity_button">&#43;</button>
                        </td>
                        <td>Margherita 9"</td>
                        <td>45 €</td>

                    </tr>
                </table>
                <p>Order total : $99</p>
                <button>Place order</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
h3 {
    text-align: center;
}

.menu_wrapper {
    display: flex;
    flex-direction: column;
    color: rgb(80, 96, 112);
}

.menu,
.basket {
    background: #faf1e2;
    border-radius: 3px;
    height: 100vh;
    padding: 1rem;
}

.quantity_btn {
    border: none;
    padding: 0.4rem;
}

@media(min-width: 900px) {
    .menu_wrapper {
        flex-direction: row;
        justify-content: space-between;
    }

    .menu {
        flex: 2;
        border-right: 1px solid rgb(202, 202, 202);

    }

    .basket {
        flex: 1;
    }
}
</style>
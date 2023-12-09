<template>
    <div class="menu_wrapper">
        <div class="menu">
            <h3>~ Authentic handmade pizza ~</h3>
            <table>
                <tbody v-for="(item, index) in allPizzas" :key="index">
                    <tr>
                        <td><strong>~ {{ item.name }} ~</strong></td>
                    </tr>
                    <tr>
                        <td><small>{{ item.description }}</small></td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td>{{ option.size }}"</td>
                        <td>{{ option.price }} €</td>
                        <td><button type="button" @click="addToBasket">&#43;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div>
                <table>
                    <tbody v-for="(item, index) in basket" :key="index">
                        <tr>
                            <td>
                                <button type="button" class="quantity_button">&#8722;</button>
                                <span>{{ item.quantity }}</span>
                                <button type="button" class="quantity_button">&#43;</button>
                            </td>
                            <td>{{ item.name }} {{ item.size }}"</td>
                            <td>{{ item.quantity * item.price }} €</td>

                        </tr>
                    </tbody>
                </table>
                <p>Order total : $ 99</p>
                <button>Place order</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const allPizzas = ref([
    {
        name: 'Margherita',
        description: 'Delicious tomato based pizza',
        options: [{ size: 9, price: 9.99 }, { size: 12, price: 14 }]
    },
    {
        name: 'Pepperoni',
        description: 'PepeeeeronnIIIIiii',
        options: [{ size: 9, price: 11 }, { size: 12, price: 18 }]
    }
]);
const basket = ref([]);

function addToBasket() {
    basket.value.push();
}

</script>
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
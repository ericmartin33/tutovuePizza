<template>
    <section class="admin_section">
        <header class="admin_section_header">
            <h3>Add new Pizza</h3>
        </header>
        <form>
            <div class="form_group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="newPizza.name" />
            </div>

            <div class="form_group">
                <label for="description">Description</label>
                <textarea rows="5" id="description" v-model="newPizza.description"></textarea>
            </div>
            <p>
                <strong>Option 1</strong>
            </p>
            <div class="form_group">
                <label for="size">Size (cm)</label>
                <input type="text" id="size1" v-model="newPizza.options[0].size" />
            </div>
            <div class="form_group">
                <label for="price1">Price</label>
                <input type="text" id="price1" v-model="newPizza.options[0].price" />
            </div>
            <p>
                <strong>Option 2</strong>
            </p>
            <div class="form_group">
                <label for="size">Size (cm)</label>
                <input type="text" id="size1" v-model="newPizza.options[1].size" />
            </div>
            <div class="form_group">
                <label for="price1">Price</label>
                <input type="text" id="price1" v-model="newPizza.options[1].price" />
            </div>
            <div class="form_group">
                <button @click.prevent="add">Add</button>
                <span> {{ message }}</span>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { addDoc } from 'firebase/firestore'
import { dbPizzasRef } from '../../firebase';

const message = ref('');
const newPizza = ref({
    name: 'eg. Margherita',
    description: 'Eg. delicious tomato based pizza',
    options: [{ size: 9, price: 9.99 }, { size: 12, price: 99 }]
})

async function add() {
    try {
        await addDoc(dbPizzasRef, newPizza.value);
        message.value = `Pizza ${newPizza.value.name} is added`
    } catch (e) {
        console.log(e);
        message.value = `there was an errore`
    }
}
</script>
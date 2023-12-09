import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';

<template>
  <div class="about">
    <section class="intro">
      <div class="info_class_wrapper">
        <h3>Quality Pizza for 30 years</h3>
        <p class="info_text">Nothing but the best quality ingredients</p>
      </div>
      <img class="info_msg" src="../assets/images/calzone.jpg">
    </section>
    <section class="more_info_wrapper">
      <h3>Click for more infos</h3>
      <nav>
        <ul>
          <RouterLink class="link" :to="{ name: 'historyLink' }">Our history</RouterLink>
          <RouterLink class="link" :to="{ name: 'deliveryLink' }">Delivery</RouterLink>
          <RouterLink class="link" :to="{ name: 'locationLink' }">Locations</RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>
  </div>
</template>


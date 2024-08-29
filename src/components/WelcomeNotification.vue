<script setup>
import { toast } from "vue3-toastify";

const notify = () => {
  toast("Welcome User!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
</script>

<template>
  <section class="p-10">
    <button
      @click="notify"
      class="bg-gradient-to-tr from-green-400 to-rose-400 px-7 py-2 text-slate-950 text-lg rounded-sm hover:text-slate-50 transition-colors duration-200 ease-in-out"
    >
      Notify
    </button>
  </section>
</template>

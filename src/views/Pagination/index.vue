<template>
  
  <div class="example-six">
    <vue-awesome-paginate
      :total-items="50"
      v-model="currentPage"
      :items-per-page="5"
      :max-pages-shown="5"
    >
      <template #prev-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>

      <template #next-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script>
import { ref } from "vue";
// !!! CODESANBOX.IO doesn't support (SCRIPT SETUP), So I will use composition api for this example
export default {
  setup() {
    const currentPage = ref(1);
    return {
      currentPage,
    };
  },
};
</script>
<style>
.example-six .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.example-six .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  /* color: black; */
}

.example-six .back-button,
.example-six .next-button {
  /* background-color: rgb(85, 85, 85); */
  color: rgb(172, 39, 39);
  border-radius: 8px;
  height: 45px;
  width: 45px;
  z-index: 10;
}
.example-six .active-page {
  background-color: #e5e5e5;
}
.example-six .paginate-buttons:hover {
  background-color: #f5f5f5;
}
.example-six .active-page:hover {
  background-color: #e5e5e5;
}

.example-six .back-button svg {
  transform: rotate(180deg) translateY(-2px);
  color: black;
}
.example-six .back-button span{
  text-align: -webkit-center;
}
.example-six .next-button span{
  text-align: -webkit-center;
}
.example-six .next-button svg {
  transform: translateY(px);
}

.example-six .back-button:hover,
.example-six .next-button:hover {
  background-color: rgb(45, 45, 45);
}

.example-six .back-button:active,
.example-six .next-button:active {
  background-color: rgb(85, 85, 85);
}
</style>



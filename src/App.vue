<script setup>
import IconCommunity from './components/icons/IconCommunity.vue'
import MyButton from './stories/Button.vue'
import NavBar from './stories/NavBar.vue'
const qwe = false
</script>

<template>
  <div id="exampleWrapper" class="flex justify-center">
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      <ya-tr-span
        data-index="63-0"
        data-translated="true"
        data-source-lang="en"
        data-target-lang="ru"
        data-value="Dropdown button "
        data-translation="Кнопка выпадающего списка "
        data-ch="0"
        data-type="trSpan"
        >Кнопка выпадающего списка </ya-tr-span
      ><svg
        class="w-4 h-4 ml-2"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 blobk"
      style="
        position: absolute;
        inset: 0px auto auto 0px;
        margin: 0px;
        transform: translate(415px, 70px);
      "
      data-popper-placement="bottom"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            ><ya-tr-span
              data-index="64-0"
              data-translated="true"
              data-source-lang="en"
              data-target-lang="ru"
              data-value="Dashboard"
              data-translation="Информационная панель"
              data-ch="0"
              data-type="trSpan"
              >Информационная панель</ya-tr-span
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            ><ya-tr-span
              data-index="65-0"
              data-translated="true"
              data-source-lang="en"
              data-target-lang="ru"
              data-value="Settings"
              data-translation="Настройки"
              data-ch="0"
              data-type="trSpan"
              >Настройки</ya-tr-span
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            ><ya-tr-span
              data-index="66-0"
              data-translated="true"
              data-source-lang="en"
              data-target-lang="ru"
              data-value="Earnings"
              data-translation="Заработок"
              data-ch="0"
              data-type="trSpan"
              >Заработок</ya-tr-span
            ></a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            ><ya-tr-span
              data-index="67-0"
              data-translated="true"
              data-source-lang="en"
              data-target-lang="ru"
              data-value="Sign out"
              data-translation="Выход"
              data-ch="0"
              data-type="trSpan"
              >Выход</ya-tr-span
            ></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

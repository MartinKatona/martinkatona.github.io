<template>
  <footer class="mt-auto bg-gray-900 py-2">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="md:w-1/3 px-4">
          <div class="text-sm text-white py-1">
            Copyright © {{ date }}
            <a
              href="https://martinkatona.github.com/portfolio"
              class="text-white hover:text-gray-400 text-sm py-1"
            >
              Katona Martin
            </a>
          </div>
        </div>
        <div class="md:w-2/3 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://martinkatona.github.com/portfolio"
                class="text-white hover:text-gray-400 text-sm block py-1 px-3"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/martinkatona/portfolio/blob/master/LICENSE.md"
                class="text-white hover:text-gray-400 text-sm block py-1 px-3"
              >
                MIT License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { computed } from "vue";

const date = computed(() => {
  const made = dayjs("2022");
  const current = dayjs();
  return made.year() < current.year()
    ? `${made.format("YYYY")} - ${current.format("YY.")}`
    : made.format("YYYY.");
});
</script>

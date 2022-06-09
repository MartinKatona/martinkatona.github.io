<template>
  <div class="bg-slate-300 rounded-xl overflow-y-auto max-h-screen">
    <UserCard image="picture.png" name="Katona Martin" />

    <SSection title="Contacts">
      <section v-for="(l, i) in contacts" :key="i">
        <SSectionItem :title="l.title" :description="l.description" />
        <div class="border-b" v-if="i + 1 < contacts.length"></div>
      </section>
    </SSection>

    <SSection title="Languages">
      <section v-for="(l, i) in languages" :key="i">
        <SSectionItem
          :title="l.title"
          :description="l.description"
          classes="columns-2"
        />
        <div class="border-b" v-if="i + 1 < languages.length"></div>
      </section>
    </SSection>

    <SSection title="Skills">
      <section v-for="(l, i) in skills" :key="i">
        <SSectionItem
          :title="l.title"
          :description="l.description"
          classes="columns-2"
        />
        <div class="border-b" v-if="i + 1 < skills.length"></div>
      </section>
    </SSection>
  </div>
</template>

<script setup lang="ts">
// Components
import UserCard from "./UserCard.vue";
import SSection from "./SSection.vue";
import SSectionItem from "./SSectionItem.vue";

// Models
import Type from "@/utils/Type";
import ListItem from "@/models/ListItem";
import userInformation from "@/userInformation";

const contacts = Type<ListItem[]>(userInformation?.contacts ?? []);
const languages = Type<ListItem[]>(userInformation?.languages ?? []);
const skills = Type<ListItem[]>(userInformation?.skills ?? []);
</script>

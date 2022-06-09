import { Ref, ref } from "vue";

export default function Type<T>(value: T) {
  return ref(value) as Ref<T>;
}

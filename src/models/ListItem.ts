export default class ListItem {
  title = "";
  description = "";

  constructor(props?: Partial<ListItem>) {
    const data = { ...props };
    Object.assign(this, data);
  }
}

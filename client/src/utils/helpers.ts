import moment from "moment";

export function formatDate(date: Date) {
  return moment(date).format("DD MMM YYYY - hh:mm A");
}

export const formatDateShort = (dateString: string) => {
  const finalDate = new Date(dateString)

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
  }).format(finalDate)
}

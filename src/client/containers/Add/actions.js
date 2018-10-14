export const addEntry = (data) => {
  return {
    type: "ADD_ENTRY",
    data: {
      id: Math.random().toString(36).substr(2,10),
      title: Math.random().toString(36).substr(2,10),
      content: data,
      date: new Date(),
      wordCount: data.trim().split(" ").length
    }
  }
}
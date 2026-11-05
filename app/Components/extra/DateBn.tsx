"use cache"
const date = async() => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const banglaDate = new Intl.DateTimeFormat("bn-BD", options).format(
    new Date(),
  );
  return (

      <div>{banglaDate}</div>

  );
};

export default date;
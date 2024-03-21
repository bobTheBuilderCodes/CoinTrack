


// type GreetingProps = {
//   username: string | undefined;
// };

const GreetUser = ( username: any) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
      <h1 className="mb-1 text-4xl text-black" title={` ${getGreeting()} ${username || 'Sam'} 🚀`} />
  );
};

export default GreetUser;

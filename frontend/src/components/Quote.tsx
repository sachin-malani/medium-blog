const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="max-w-md text-xl font-semibold text-left mt-4">
            Julies Winnfield
          </div>
          <div className="max-w-md text-sm font-light text-slate-600">
            CEO, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

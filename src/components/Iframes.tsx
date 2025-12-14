export const Iframes = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <iframe
          title="podium webchat widget prompt"
          aria-label="podium webchat widget prompt"
          className="fixed box-border caret-transparent h-[216px] max-h-[216px] max-w-[340px] w-[340px] z-[2147482997] right-0 bottom-[75px]"
        ></iframe>
      </div>
      <iframe
        title="podium webchat widget bubble"
        aria-label="podium webchat widget bubble"
        className="fixed box-border caret-transparent h-[100px] max-h-[100px] max-w-40 w-40 z-[2147482997] right-0 bottom-0"
      ></iframe>
    </div>
  );
};

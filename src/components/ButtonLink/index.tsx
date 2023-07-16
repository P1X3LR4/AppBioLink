type PropsButtonLink = {
  icon: any;
  label: string;
  url: string;
  ii?: string;
  style?: React.CSSProperties;
};

export default function ButtonLink({
  icon,
  label,
  url,
  ii,
}: PropsButtonLink) {
  return (
    <a href={url} className={`group w-full rounded-r-lg border-primary-color-100 border-2 flex justify-start gap-4 items-center hover:bg-primary-color-100 ${ii}`}>
      <div className="bg-primary-color-100 p-1">
        <img src={icon} className="w-8" />
      </div>
      <p className="font-medium text-primary-color-100 tracking-widest group-hover:text-dark-color-100">
        {label}
      </p>
    </a>
  );
}

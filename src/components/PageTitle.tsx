type PageTitleProps = Readonly<{ title: string }>

const PageTitle = ({ title }: PageTitleProps) => (
  <h1 className="display-4 text-center mb-5">{title}</h1>
)

export default PageTitle

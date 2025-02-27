import AdSense from "@/components/common/AdSense";
import Head from "@/components/next/Head";

const Home = async () => {

  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_SITE_NAME}-技术社区`}
        description={`${process.env.NEXT_PUBLIC_SITE_NAME}是面向中文开发者的技术内容分享与交流平台。我们通过技术文章、问答服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。`}
        keywords={[
          process.env.NEXT_PUBLIC_SITE_NAME,
          "技术社区,博客,前端开发,WEB",
        ]}
      />
    </>
  );
};

export default Home;

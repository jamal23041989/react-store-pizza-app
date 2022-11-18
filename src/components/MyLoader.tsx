import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="137" cy="137" r="137" />
        <rect x="0" y="295" rx="10" ry="10" width="280" height="43" />
        <rect x="0" y="352" rx="10" ry="10" width="280" height="69" />
        <rect x="0" y="433" rx="10" ry="10" width="135" height="25" />
        <rect x="146" y="433" rx="10" ry="10" width="135" height="25" />
    </ContentLoader>
);

export default MyLoader;

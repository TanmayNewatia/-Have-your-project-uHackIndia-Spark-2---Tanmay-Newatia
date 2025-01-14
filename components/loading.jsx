import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Loading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    );
}
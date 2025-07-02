// resources/js/Pages/Homepage.tsx

import { Head } from '@inertiajs/react';

export default function Homepage({ seo, blocks }) {
    return (
        <>
            <Head title={seo?.title}>
                <meta name="description" content={seo?.description} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>

            <main>
                {/* Debug props */}
                <pre>{JSON.stringify({ seo, blocks }, null, 2)}</pre>

                {/* Render blocks */}
            </main>
        </>
    );
}

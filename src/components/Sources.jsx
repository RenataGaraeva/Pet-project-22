export default function Sources ({sources}) {
    return (
        <>
        <h3 id="titleSources">Источники</h3>
    <ul className="listOfSources">
        {sources.map((source, index) => (
            <li key={index}>
                {source.source ? (<a href="{source.source}">{source.name}</a>)
                    : (source.name)}
            </li>
        ))}
    </ul>
        </>
    )
}
type ChevronProps = {
    className: string;
    width: string;
};

const Chevron = ({ className, width }: ChevronProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            fill="none"
            viewBox="0 0 11 7"
        >
            <path
                fill="currentColor"
                d="M5.793 6.519h-.628L0 1.522 1.23.119l4.235 3.957L9.755.12l1.175 1.403-5.137 4.997Z"
            />
        </svg>
    );
};

export default Chevron;

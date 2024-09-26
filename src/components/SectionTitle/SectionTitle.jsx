/* eslint-disable react/prop-types */

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="  md:w-3/12 mx-auto text-center my-6">
            <p className="text-yellow-800 mb-2">---{heading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;
import React from 'react'
import FeatureStore from '../../store/FeatureStore.js'
import LegalContentSkeleton from '../../skeleton/LegalContentSkeleton.jsx';
import parse from 'html-react-parser';

const LegalContent = () => {
    const {LegalDetails}=FeatureStore();

    if(LegalDetails===null){
        return <LegalContentSkeleton/>
        }
    else{
        return (
                 <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-12'>
                        <div className='card p-4'>
                            {parse(LegalDetails[0]['description'])}
                        </div>
                        </div>
                    </div>
                    
                 </div>
               )
        }
  
}

export default LegalContent;
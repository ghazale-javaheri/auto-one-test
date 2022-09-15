import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GetCarsParams, NoUndefinedField } from "types";

const useFilters=()=> {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchAsObject = Object.fromEntries(
        new URLSearchParams(searchParams)
      )
    
    const [filters, setFilters] = useState<NoUndefinedField<GetCarsParams>>({
        color:searchAsObject?.color,
        manufacturer: searchAsObject?.manufacturer,
        page: searchAsObject?.page? parseInt(searchAsObject?.page): undefined,
        sort: searchAsObject?.sort
    })

    const searchObjectHash = Object.values(searchAsObject).join('-')


    useEffect(()=>{
        const params:Record<string, string>= {};
        if(filters){
            Object.entries(filters).map(([key,value])=>{
                if(value && key){
                    params[key] = String(value)
                }
            })
            setSearchParams(params);
        }
    },[filters, setSearchParams])

    useEffect(()=>{        
        setFilters({
            color:searchAsObject?.color,
            manufacturer: searchAsObject?.manufacturer,
            page: searchAsObject?.page? parseInt(searchAsObject?.page): undefined,
            sort: searchAsObject?.sort
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ searchObjectHash])
    
    
    return {filters, setFilters}

}

export default useFilters;

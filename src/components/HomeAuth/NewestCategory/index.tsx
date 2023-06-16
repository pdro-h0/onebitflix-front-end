import { SlideComponent } from "@/components/common/SlideComponent"
import { courseService } from "@/services/courseService"

import useSWR from "swr"

import styles from '../../../../styles/slideCategory.module.scss'

export const NewestCategory = ()=>{
    const { data, error } = useSWR("/newest", courseService.getNewsestCourses)

    if(error) return error
    if(!data) return(
        <>
            <p>CARREGANDO...</p>
        </>
    )

    return(
        <>
    <p className={styles.titleCategory}>LANÇAMENTOS</p>
    <SlideComponent course={data.data}/>
        </>
    )
}
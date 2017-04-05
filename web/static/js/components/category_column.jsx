import React from "react"
import IdeaListItem from "./idea_list_item"
import * as AppPropTypes from "../prop_types"
import styles from "./css_modules/category_column.css"

function CategoryColumn(props) {
  const categoryToEmoticonUnicodeMap = {
    happy: "😊",
    sad: "😥",
    confused: "😕",
    "action-item": "🚀",
  }

  const handleDelete = (e)=> {
    let id = Number.parseInt(e.target.id)
    props.onIdeaDelete(id)
  }

  const emoticonUnicode = categoryToEmoticonUnicodeMap[props.category]
  const filteredIdeas = props.ideas.filter(idea => idea.category === props.category)
  const filteredIdeasList = filteredIdeas.map(idea => {
    return (
      <IdeaListItem
        idea={idea}
        key={idea.id}
        handleDelete={handleDelete}
        currentPresence={props.currentPresence}
      />
    )
  })

  return (
    <section className={`${props.category} column`}>
      <div className="ui center aligned basic segment">
        <i className={styles.icon}>{emoticonUnicode}</i>
        <p><strong>{props.category}</strong></p>
      </div>
      <div className="ui divider" />
      <ul className={`${props.category} ideas ui divided list`}>
        {filteredIdeasList}
      </ul>
    </section>
  )
}

CategoryColumn.propTypes = {
  ideas: AppPropTypes.ideas.isRequired,
  currentPresence: AppPropTypes.presence,
  category: AppPropTypes.category.isRequired,
}

export default CategoryColumn

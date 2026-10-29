export function getCareerRecommendations(
  careers,
  answers
) {

  const scores = careers.map((career) => {

    let score = 0


    // FRONTEND DEVELOPER
    if (career.slug === 'frontend-developer') {

      if (answers.interest === 'technology') {
        score += 3
      }

      if (answers.activity === 'building') {
        score += 3
      }

      if (answers.workStyle === 'technical') {
        score += 2
      }

      if (answers.workStyle === 'creative') {
        score += 1
      }
    }


    // BACKEND DEVELOPER
    if (career.slug === 'backend-developer') {

      if (answers.interest === 'technology') {
        score += 3
      }

      if (answers.activity === 'building') {
        score += 3
      }

      if (answers.workStyle === 'technical') {
        score += 3
      }
    }


    // DATA ANALYST
    if (career.slug === 'data-analyst') {

      if (answers.interest === 'data') {
        score += 3
      }

      if (answers.activity === 'analysis') {
        score += 3
      }

      if (answers.workStyle === 'analytical') {
        score += 3
      }
    }


    // UI/UX DESIGNER
    if (career.slug === 'ui-ux-designer') {

      if (answers.interest === 'creative') {
        score += 3
      }

      if (answers.activity === 'design') {
        score += 3
      }

      if (answers.workStyle === 'creative') {
        score += 3
      }

      if (answers.workStyle === 'people') {
        score += 1
      }
    }


    // DIGITAL MARKETER
    if (career.slug === 'digital-marketer') {

      if (answers.interest === 'business') {
        score += 3
      }

      if (answers.activity === 'communication') {
        score += 3
      }

      if (answers.workStyle === 'people') {
        score += 2
      }

      if (answers.workStyle === 'creative') {
        score += 1
      }
    }


    // PROJECT MANAGER
    if (career.slug === 'project-manager') {

      if (answers.interest === 'business') {
        score += 2
      }

      if (answers.activity === 'planning') {
        score += 3
      }

      if (answers.workStyle === 'leadership') {
        score += 3
      }

      if (answers.workStyle === 'people') {
        score += 2
      }
    }


    return {
      ...career,
      matchScore: score,
    }
  })


  return scores
    .sort(
      (a, b) =>
        b.matchScore - a.matchScore
    )
    .slice(0, 3)
}
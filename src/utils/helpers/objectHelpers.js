export const updateObjectInArray = (users, itemId, newObjectProps) => {
    return users.map((user) => {
        if (user.id === itemId) {
            return {...user, ...newObjectProps}
        }
        return user
    })
}
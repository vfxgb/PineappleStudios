import {prismaClient} from "../database/prisma";

const prisma = prismaClient;

export async function addItemToLibrary(userId: number, itemId: number) {
  try {
    // Fetch the user to ensure it exists
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      console.log(`User with ID ${userId} does not exist.`);
      return false;
    }

    // Fetch the library to ensure it exists
    const library = await prisma.library.findUnique({
      where: {
        id: user.libraryId,
      },
    });

    if (!library) {
      console.log(`Library with ID ${user.libraryId} does not exist.`);
      return false;
    }

    // Add the item to the library
    await prisma.itemsInLibraries.create({
      data: {
        libraryId: user.libraryId,
        itemId: itemId, // Use the provided item ID
      },
    });

    return true; // Return true to indicate success
  } catch (error) {
    console.error("Error adding item to library:", error);
    return false;
  }
}

export async function removeItemFromLibrary(userId: number, itemId: number) {
  try {
    // Fetch the user to ensure it exists
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      console.log(`User with ID ${userId} does not exist.`);
      return false;
    }

    // Fetch the library to ensure it exists
    const library = await prisma.library.findUnique({
      where: {
        id: user.libraryId,
      },
    });

    if (!library) {
      console.log(`Library with ID ${user.libraryId} does not exist.`);
      return false;
    }

    // Check if the item exists in the library
    const itemInLibrary = await prisma.itemsInLibraries.findFirst({
      where: {
        libraryId: user.libraryId,
        itemId: itemId,
      },
    });

    if (!itemInLibrary) {
      console.log(`Item with ID ${itemId} is not in the library.`);
      return false;
    }

    // Remove the item from the library
    await prisma.itemsInLibraries.delete({
      where: {
        libraryId_itemId: {
          libraryId: user.libraryId,
          itemId: itemId,
        },
      },
    });

    return true; // Return true to indicate success
  } catch (error) {
    console.error("Error removing item from library:", error);
    return false;
  }
}

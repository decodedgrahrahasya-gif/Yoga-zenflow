import { NextRequest, NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { getDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await getDatabase()
    const collection = db.collection("enquiries")

    const doc = {
      ...body,
      status: "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const result = await collection.insertOne(doc)

    return NextResponse.json(
      { success: true, data: { ...doc, id: result.insertedId.toString() } },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    const db = await getDatabase()
    const collection = db.collection("enquiries")

    if (id) {
      const enquiry = await collection.findOne({ _id: new ObjectId(id) })
      if (!enquiry) {
        return NextResponse.json(
          { success: false, message: "Enquiry not found" },
          { status: 404 }
        )
      }
      return NextResponse.json({
        success: true,
        data: { ...enquiry, id: enquiry._id.toString(), _id: undefined },
      })
    }

    const enquiries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    const data = enquiries.map((e) => ({
      ...e,
      id: e._id.toString(),
      _id: undefined,
    }))

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing id query param" },
        { status: 400 }
      )
    }

    const body = await request.json()
    const db = await getDatabase()
    const collection = db.collection("enquiries")

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date().toISOString() } },
      { returnDocument: "after" }
    )

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { ...result, id: result._id.toString(), _id: undefined },
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing id query param" },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const collection = db.collection("enquiries")

    const result = await collection.findOneAndDelete({ _id: new ObjectId(id) })

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: { id } })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    )
  }
}

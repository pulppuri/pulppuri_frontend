"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ChevronLeft, Bell, Shield, HelpCircle, LogOut, MessageCircle, Heart } from 'lucide-react'

export default function MyPage() {
  const router = useRouter()
  const [notificationEnabled, setNotificationEnabled] = useState(true)

  // Mock user data - TODO: Replace with actual user data from backend
  const user = {
    id: 1,
    nickname: "옥천옥천",
    region: "옥천읍",
    interests: ["청년", "주거"],
    proposalCount: 3,
    commentCount: 12,
    likeCount: 47
  }

  // Mock posts data - TODO: Fetch from backend
  const myPosts = [
    {
      id: 1,
      title: "마을공동도서관 건립 요청",
      category: "교육",
      preview: "어린이와 청소년을 위한 도서관을...",
      agreeCount: 100,
      commentCount: 50
    },
    {
      id: 2,
      title: "마을공동도서관 건립",
      category: "교육",
      preview: "어린이와 청소년을 위한 도...",
      agreeCount: 100,
      commentCount: 50
    }
  ]

  // Mock participated proposals - TODO: Fetch from backend
  const participatedProposals = [
    {
      id: 3,
      title: "마을공동도서관 건립 요청",
      category: "교육"
    },
    {
      id: 4,
      title: "마을공동도서관 건립",
      category: "교육"
    }
  ]

  const handleLogout = () => {
    // TODO: Implement logout logic with backend
    console.log("[v0] Logout clicked")
    router.push("/welcome")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background px-4 py-4">
        <h1 className="text-2xl font-bold">마이페이지</h1>
      </div>

      <div className="flex-1 space-y-6 px-4">
        {/* Profile Section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-[#d3c1ff]" />
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-lg font-bold">{user.nickname}</h2>
                <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                  {user.region}
                </span>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">관심 분야</p>
                <div className="flex gap-2">
                  {user.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full rounded-lg bg-muted py-2 text-sm font-medium transition-colors hover:bg-muted/80">
                프로필 편집
              </button>
            </div>
          </div>
        </div>

        {/* Activity Stats */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold">활동 현황</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-blue-600">{user.proposalCount}</div>
              <div className="text-sm text-muted-foreground">정책 제안</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-green-600">{user.commentCount}</div>
              <div className="text-sm text-muted-foreground">댓글 작성</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-red-600">{user.likeCount}</div>
              <div className="text-sm text-muted-foreground">받은 좋아요</div>
            </div>
          </div>
        </div>

        {/* My Posts */}
        <div>
          <h3 className="mb-3 text-lg font-bold">내가 작성한 글</h3>
          <div className="grid grid-cols-2 gap-3">
            {myPosts.map((post) => (
              <div
                key={post.id}
                className="cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-muted/20"
                onClick={() => router.push(`/proposals/${post.id}`)}
              >
                <span className="mb-2 inline-block rounded-full bg-[#d3c1ff] px-3 py-1 text-xs font-medium text-foreground">
                  {post.category}
                </span>
                <h4 className="mb-2 text-sm font-bold">{post.title}</h4>
                <p className="mb-3 text-xs text-muted-foreground">{post.preview}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.agreeCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.commentCount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Participated Proposals */}
        <div>
          <h3 className="mb-3 text-lg font-bold">내가 참여한 제안</h3>
          <div className="grid grid-cols-2 gap-3">
            {participatedProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-muted/20"
                onClick={() => router.push(`/proposals/${proposal.id}`)}
              >
                <span className="mb-2 inline-block rounded-full bg-[#d3c1ff] px-3 py-1 text-xs font-medium text-foreground">
                  {proposal.category}
                </span>
                <h4 className="text-sm font-bold">{proposal.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold">설정</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">알림 설정</div>
                  <div className="text-sm text-muted-foreground">새 댓글과 좋아요 알림</div>
                </div>
              </div>
              <button
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  notificationEnabled ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setNotificationEnabled(!notificationEnabled)}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                    notificationEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <button className="flex w-full items-center gap-3 transition-colors hover:bg-muted/50 rounded-lg p-2 -m-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">개인정보 보호</div>
                <div className="text-sm text-muted-foreground">내 정보 공개 범위 설정</div>
              </div>
            </button>

            <button className="flex w-full items-center gap-3 transition-colors hover:bg-muted/50 rounded-lg p-2 -m-2">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <div className="text-left">
                <div className="font-medium">도움말</div>
                <div className="text-sm text-muted-foreground">사용 방법 및 자주 묻는 질문</div>
              </div>
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-red-600 shadow-sm transition-colors hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">로그아웃</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t bg-white">
        <div className="mx-auto flex max-w-md items-center justify-around py-2">
          <button
            onClick={() => router.push("/policies")}
            className="flex flex-col items-center gap-1 px-6 py-2 transition-colors hover:bg-muted/50 rounded-lg"
          >
            <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs text-muted-foreground">정책 사례</span>
          </button>
          <button
            onClick={() => router.push("/proposals")}
            className="flex flex-col items-center gap-1 px-6 py-2 transition-colors hover:bg-muted/50 rounded-lg"
          >
            <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs text-muted-foreground">정책 제안</span>
          </button>
          <button className="flex flex-col items-center gap-1 px-6 py-2 rounded-lg bg-[#d3c1ff]/20">
            <svg className="h-6 w-6 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-xs font-medium text-[#8b5cf6]">마이페이지</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

# DGStation FINAL BUILD Specification

## Locked visual identity
Deep Ocean Premium: deep ocean/navy glass surfaces, electric blue and controlled gold. No fish/sea creatures. No purple-neon. Approved DGStation square icon, sharp wordmark, seven-promoter set and platform logos remain source-locked and must never be AI-redesigned.

## Locked navigation
HOME | PROMOSI | DEPOSIT | WITHDRAW | GAMES | LIVE CHAT; LOGIN + DAFTAR.

## Locked platforms (9)
918KISS, MEGA888, PUSSY888, JOKER GAMING, Club SunCity, Lucky Palace, Newtown Live Casino, Rollex Casino, LIVE22 Metaverse.

## Member
Admin assigns username/member ID. Profile stores bank plus one game ID per platform. Customer Area contains wallet, deposit, withdraw, history, bonus/promotion, game accounts, Malaysia 4D and Live Chat.

## Deposit
RM10–RM1,000; bank + platform; multiple receipt upload; one bonus per deposit; turnover = deposit + bonus. Completion creates a Live Chat transaction summary.

## Withdraw
RM50–RM5,000; only one Pending withdrawal per member. Admin approves with receipt or rejects with remark. Completion creates a Live Chat transaction summary.

## Backoffice
Multi-admin CS; owner controls major settings. Member active/inactive, message deletion, wallet reset to 0.00, add/subtract balance, transaction review, banners and promotions.

## Promotions
Welcome Back: min topup RM30, min cuci ×3, max cuci ×50, one claim, max bonus RM388.
Midnight 20%: 00:00–05:00, min deposit RM10, turnover ×2, slot only.
Bonus engine supports turnover ×2–×30 and scheduled availability.
Telco rules remain part of promotion configuration.

## Production setup
1. Create Supabase project.
2. Run supabase/schema.sql.
3. Copy assets/js/config.example.js to assets/js/config.js and insert public project URL + anon key only.
4. Create a public receipt storage bucket or signed-upload implementation before enabling production receipt submission.
5. Enable GitHub Pages Actions deployment.
6. Add the exact approved MASTER assets to assets/img/master/. Never replace them with generated substitutes.

Secrets/service-role keys must never be committed to this repository.
